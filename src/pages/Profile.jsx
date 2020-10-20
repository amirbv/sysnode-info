import React from "react";
import { MetaTags } from "react-meta-tags";
import { withTranslation } from "react-i18next";

import Background from "../parts/Background";
import BackgroundInner from "../parts/BackgroundInner";
import Title from "./partials/Title";
import UserInfo from "./partials/UserInfo";
import UserMasternodes from "./partials/UserMasternodes";

function Profile (props) {
  
  
    const { t } = props;
    return (
      <Background>
        <BackgroundInner />
        <main className="section profilePage">
          <MetaTags>
            <title> {t("profile.meta.title")} </title>
            <meta name="keywords" content={t("profile.meta.keywords")} />
            <meta name="description" content={t("profile.meta.description")} />
          </MetaTags>
          <div className="shell-large">
            <div className="section__body">
              <div className="articles">
                <section className="article">
                  <div className="cols">
                    <div className="col col--size-12">
                      <div className="article__content article__content--pull-left text-center">
                        <Title heading="User profile" />
                        <UserInfo />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="article">
                  <div className="cols">
                    <div className="col col--size-12">
                      <div className="article__content article__content--pull-left text-center">
                        <UserMasternodes />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </Background>
    );
  
}

export default withTranslation()(Profile);