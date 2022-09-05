import React from 'react'

import Button from '../../components/button-component';
import styles from './landing.module.css';

import { AuthSectionButtons, HeaderH1, HeroSectionBanner, HeroSectionText, LandingPage } from './landing.styles';



function Landing() {
  return (
    <div className={styles.container}>
        <div className={styles.herosectionbanner}>
            <HeaderH1>
                <span>Next Expense</span>
            </HeaderH1>
            <p>
                You can always put a tab on your next expense, if you havent already.
            </p>
            <AuthSectionButtons>
                <Button>
                    Sign in With Google
                </Button>
                <Button>
                    Sign in With Email
                </Button>
                <Button>
                    Sign in With Phone
                </Button>
            </AuthSectionButtons>
        </div>
        <div className={styles.herosectiontext}>
            <HeaderH1>
                Trac All Your Expenses in one-go
            </HeaderH1>
            <HeaderH1>
                Do not miss out on your next Expense
            </HeaderH1>
            <HeaderH1>
                It Couldn't be hard this time.
            </HeaderH1>
            <HeaderH1>
                Always make it a point to track that next expense.
            </HeaderH1>
        </div>
    </div>
  )
}

export default Landing;