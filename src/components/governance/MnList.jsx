import React, { useEffect, useState } from "react";

import { useUser } from "../../context/user-context";
import { getUserMasterNodes } from "../../utils/request";
import signVote from "../../utils/sign-vote";
import { voteProposal } from "../../utils/request";
import MnItem from "./MnItem";

const MnList = ({ proposal, vote, onAfterVote }) => {
  let { user } = useUser();
  const [loadingMN, setLoadingMN] = useState(false);
  const [masterNodes, setMasterNodes] = useState([]);
  const [masterNodesForVote, setMasterNodesForVote] = useState([]);


  useEffect(() => {
    console.log(proposal);
    console.log(vote);
    const getMnByUser = async () => {
      setLoadingMN(true);
      let {data} = await getUserMasterNodes(user.token).catch((err) => {
        throw err;
      });
      setLoadingMN(false);
      setMasterNodes(data.nodes || []);
    };
    getMnByUser();
  }, []);

  const addMnVote = (mn) => {
    setMasterNodesForVote([...masterNodesForVote, mn]);
  };

  const removeMnVote = (uid) => {
    let filteredMN = masterNodesForVote.filter((mn) => mn.uid !== uid);

    setMasterNodesForVote(filteredMN);
    
  };

  const voting = async (voteOutcome = 1) => {
    console.log(masterNodesForVote);
    let r = await Promise.all(
      masterNodesForVote.map(async (mn) => {
        const proposalVoteNo = {
          mnPrivateKey: mn.privateKey,
          vinMasternode: mn.txId,
          gObjectHash: proposal.Hash,
          voteOutcome,
        };
        const voteData = signVote(proposalVoteNo);
        await voteProposal(voteData)
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
    );
    console.log(r);
  };


  return (
    <div className="article">
      <h3>{proposal.title || proposal.name}</h3>
      <p>Select the masternodes to vote with</p>
      {masterNodes.length > 0 ? (
        <>
          <div className="form-group">
            <ul className="selector">
              {masterNodes.map(mn => (
                <MnItem key={mn.uid} mn={mn} onAddMN={addMnVote} onRemoveMN={removeMnVote} /> 
              ))}
            </ul>
            
          </div>
          <div className="form-actions-spaced text-center" style={{ marginTop:'10px'}}>
            <button
              className="btn btn--blue"
              onClick={voting}
              disabled={masterNodesForVote.length === 0}
            >Vote</button>
          </div>
        </>
      ) : (
        <>
          {
            loadingMN && <p>Loading...</p>
          }
          {
            (!loadingMN && masterNodes.length === 0) && <p>You don't have masternodes to vote please add one</p>
          }
        </>
      )}
    </div>
  );
};

export default MnList;
