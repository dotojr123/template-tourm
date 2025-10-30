/**
 * @typedef {object} CounterItem
 * @property {number} value - O número final para a animação de contagem.
 * @property {string} [suffix] - O sufixo a ser exibido após o número (ex: "k", "%").
 * @property {string} title - O título ou descrição do contador.
 */

/**
 * Componente Counter que exibe uma lista de contadores animados.
 * @param {object} props - As propriedades do componente.
 * @param {CounterItem[]} props.counters - Uma array de objetos de contador para exibir.
 * @param {boolean} [props.showShapes=false] - Se deve ou não exibir as imagens de shape decorativas.
 */
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styles from "./Counter.module.css";

const Counter = ({ counters, showShapes = false }) => {
    // Use intersection observer to detect when component is in view
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className={`${styles.space} ${styles.shapeMockupWrap}`} ref={ref}>
            <div className="container">
                <div className="row">
                    {counters.map((counter, index) => (
                        <div key={index} className={`col-sm-6 col-xl-3 ${styles.counterCardWrap}`}>
                            <div className={styles.counterCard}>
                                <div className={styles.counterShape}><span></span></div>
                                <div className="media-body">
                                    <h3 className={styles.boxNumber}>
                                        {inView && (
                                            <CountUp
                                                start={0}
                                                end={counter.value}
                                                duration={2}
                                                delay={0}
                                            />
                                        )}
                                        {counter.suffix}
                                    </h3>
                                    <h6 className={styles.counterTitle}>{counter.title}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {showShapes && (
                    <>
                        <div
                            className={`${styles.shapeMockup} d-none d-xl-block`}
                            style={{top:"30%", left:"-15%"}}
                        >
                            <img src="/assets/img/shape/shape_1.png" alt="shape" />
                        </div>
                        <div
                            className={`${styles.shapeMockup} d-none d-xl-block`}
                            style={{top:"45%", left:"-13%"}}
                        >
                            <img src="/assets/img/shape/shape_2.png" alt="shape" />
                        </div>
                        <div
                            className={`${styles.shapeMockup} d-none d-xl-block`}
                            style={{top:"32%", left:"-7%"}}
                        >
                            <img src="/assets/img/shape/shape_3.png" alt="shape" />
                        </div>
                        <div
                            className={`${styles.shapeMockup} d-none d-xl-block`}
                            style={{bottom:"-24%", left:"-15%"}}
                        >
                            <img src="/assets/img/shape/shape_6.png" alt="shape" />
                        </div>
                        <div
                            className={`${styles.shapeMockup} jump d-none d-xl-block`}
                            style={{top:"5%", right:"-10%"}}
                        >
                            <img src="/assets/img/shape/shape_5.png" alt="shape" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Counter;
