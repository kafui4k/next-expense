import React, { useState } from "react"
import Image from "next/image"
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import { magic } from "../lib/magic-auth";

import 'swiper/css';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles/Login.module.css'

import Button from "../components/button-component";


const Slide1 = () => (
    <div className={styles.carouselSlider}>
        <div className={styles.slider1}>
            <h1>
                CORPORATE CARDS.
            </h1>
            <h1>
                REIMBURSMENTS.
            </h1>
            <h1>
                RECEIPT SCANNING.
            </h1>
            <div style={{ background: '#0B1B34', padding: '1rem', color: '#0185FE' }}>
                <h1 style={{ background: 'transparent' }}>ONE APP, ALL <span style={{ color: 'white' }}>FREE.</span></h1>
            </div>
        </div>
    </div>
);
  
const Slide2 = () => (
    <div className={styles.carouselSlider}>
        <div className={styles.slider2}>
            <span style={{  color: '#41DE9C' }}>INTRODUCING</span>
            <div>
            <h1>
                The Expensify
            </h1>
            <h1>
                CPA card-
            </h1>
            <h1>
                built for accountants,
            </h1>
            <h1>
                loved by clients
            </h1>
            </div>
        </div>
    </div>
);
  
interface Errors {
    email?: string;
}

const schema = Yup.object().shape({
    email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
});

const Login = () => {
    const router = useRouter();
    const [switchToEmailLogin, setSwitchToEmaiLogin] = useState<boolean>(false);    

    const handleSwitchToEmailLogin = (e: any) => {
        e.preventDefault();
        
        setSwitchToEmaiLogin(!switchToEmailLogin)
    }

    const handleCancelEmailLogin = () => {
        setSwitchToEmaiLogin(false)
    }

    const handleLoginWithEmailSubmit = async (values: any) => {
        if (values.email) {
            try {
                const userdidToken = await magic?.auth.loginWithMagicLink({ email: values.email });
                 if (userdidToken){
                    router.push("/")
                } else {
                    console.error("Error fetching user credentials")
                }
            } catch (error) {
                console.error("Error trying login ", error)
            }
        } else {
            console.error("User email not provided")
        }
    }
    
    return (
        <div style={{ display: 'flex' }}>
            <Head>
                <title>Next Expense | App Login</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.left}>
                    <h1>
                        <Image src="/static/expensify-iconmark-reversed.svg" width={50} height={50} />
                        <p className={styles.headerText}>Welcome! How would you like to connect?</p>
                    </h1>
                    <div className={styles.authInputFields}>
                        {
                            switchToEmailLogin && switchToEmailLogin ?
                                <div className={styles.loginWithEmailWrapper}>
                                    <Formik
                                        initialValues={{ email: '' }}
                                        validationSchema={schema}
                                        onSubmit={handleLoginWithEmailSubmit}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting,
                                            /* and other goodies */
                                        }) => (
                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    className={styles.loginWithEmailInput}
                                                    type="email"
                                                    name="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />

                                                <p className="error">
                                                    {errors.email && touched.email && errors.email}
                                                </p>

                                                <div className={styles.loginWithEmailButtons}>
                                                    <Link href="/login">
                                                        <a onClick={handleCancelEmailLogin}>Cancel</a>
                                                    </Link>
                                                    {
                                                        isSubmitting ? "Loading..." : <button className={styles.continueLoginWithEmailButton} type="submit" disabled={isSubmitting}>
                                                        Next
                                                        </button>
                                                    }
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            :
                                <>
                                    <button className={styles.button} onClick={handleSwitchToEmailLogin}>
                                        <div className={styles.buttonTextWithIcon}>
                                            Email
                                            <Image src="/static/chevron-right.svg" width={30} height={30} color="white" />
                                        </div>
                                    </button>
                                    <Button>
                                        <div className={styles.buttonTextWithIcon}>
                                            Phone Number
                                            <Image src="/static/chevron-right.svg" width={30} height={30} color="white" />
                                        </div>
                                    </Button><Button>
                                        <div className={styles.buttonTextWithIcon}>
                                            Google
                                            <Image src="/static/chevron-right.svg" width={30} height={30} color="white" />
                                        </div>
                                    </Button><Button>
                                        <div className={styles.buttonTextWithIcon}>
                                            Apple
                                            <Image src="/static/chevron-right.svg" width={30} height={30} color="white" />
                                        </div>
                                    </Button>
                                </>
                        }                       
                    </div>
                    <footer className={styles.footer}>
                        <h3>Expensify</h3>
                        <p className={styles.footerText}>
                            By logging in, you agree to our <span className={styles.footerSpanText}>terms of service</span> and <span className={styles.footerSpanText}>privacy policy</span>.
                            Money transmission is provided by Expensify Payments LLC (NMLS ID:2017010) pursuant to its <span className={styles.footerSpanText}>licenses</span>.
                        </p>
                    </footer>
                </div>
                <div className={styles.right}>
                    <div className={styles.swiper}>
                        <Swiper
                            // pagination={pagination}
                            modules={[Pagination]}
                            className="mySwiper"
                            autoplay
                            >
                            <SwiperSlide>{Slide1}</SwiperSlide>
                            <SwiperSlide>{Slide2}</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login