import { useEffect, useRef, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import style from '../styles/Home.module.css';
import name from '../json/name.json';
import HeadMeta from '../components/HeadMeta';
import { useRouter } from 'next/router';
import Share from '../components/Share';

export default function Home() {
    const router = useRouter();
    const imageRef = useRef(null);
    const labelContainerRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [data, setData] = useState({ className: '', value: '2' });

    const [script, setScript] = useState(null);
    const [scriptTitle, setScriptTitle] = useState(null);
    const modelRef = useRef(null);
    const [re, setRe] = useState(false);

    const url = process.env.NEXT_PUBLIC_URL;
    useEffect(() => {
        const URL = 'https://teachablemachine.withgoogle.com/models/vMOgrTCV4/';
        let maxPredictions;

        const init = async () => {
            const modelURL = URL + 'model.json';
            const metadataURL = URL + 'metadata.json';

            modelRef.current = await tmImage.load(modelURL, metadataURL);
            maxPredictions = modelRef.current.getTotalClasses();
        };

        async function predict() {
            let prediction = [];
            try {
                prediction = await modelRef.current.predict(imageRef.current);
            } catch {}

            let arr = [];
            prediction.map((item, idx) => {
                const { className, probability } = item;

                arr.push({ className, value: probability.toFixed(7) });
            });

            setImageList(arr);
            setLoading(false);
        }

        init();

        if (image) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imageRef.current.src = e.target.result;

                predict();
            };
            reader.readAsDataURL(image);
        }
    }, [image, re]);

    useEffect(() => {
        let maxNumArr = imageList.sort((a, b) => {
            return parseFloat(b.value) - parseFloat(a.value);
        });
        if (maxNumArr[0] !== undefined) {
            setData(maxNumArr[0]);
        }
    }, [imageList]);

    useEffect(() => {
        name.find((item) => {
            if (item.className === data.className) {
                setScript(item.script);
                setScriptTitle(item.title);
            }
        });
    }, [data]);

    return (
        <div className={style.mainBoard}>
            <HeadMeta
                title="흑막 테스트 - Mind Playground"
                description="사진으로 알아보는 14가지 유형의 흑막&#38;빌런 테스트"
                url={url}
            />
            <h2>흑막 테스트</h2>
            <div className={style.titleDetailBoard}>
                <span>
                    5252! 꽤나 <strong>「흑막」</strong>스러운 얼굴을 하고있잖아?
                </span>

                <span>사진으로 당신이 애니메이션에 등장했더라면 어떤 유형의 흑막&#38;빌런인지 확인해보라구?</span>
            </div>
            <input
                type="file"
                accept="image/*"
                className={style.imgInput}
                id="file"
                onChange={(e) => {
                    setImage(e.target.files[0]);
                    setLoading(true);
                    if (typeof window !== 'undefined') {
                        setTimeout(() => {
                            setRe(!re);
                        }, 2000);
                    }
                }}
            />
            {image ? null : (
                <div className={style.imgDiv}>
                    <label htmlFor="file" className={style.imgLabel}>
                        <p>사진 올리기</p>
                        <i className="bi bi-card-image"></i>
                    </label>
                </div>
            )}
            <div className={style.selectImgDiv}>
                <img ref={imageRef} alt="" className={style.selectImg} />
            </div>
            {loading ? <div className={style.loading}>빌런의 아우라를 해석하는 중...</div> : null}

            {scriptTitle ? (
                <div id="label-container" ref={labelContainerRef} className={style.scriptBoard}>
                    <section>
                        <div>{scriptTitle}</div>
                        <div>{script}</div>
                    </section>
                </div>
            ) : null}

            <div className={style.addDetail}>
                <div>* 해당 사이트에 업로드한 이미지는 저장되지 않습니다.</div>
                <br></br>
                <div>* 총 14가지의 빌런 및 흑막 유형이 있습니다.</div>
                <br></br>
                <div>* 동일한 사람의 사진이라도 연출에 따라 다른 유형의 결과가 나올수도 있습니다.</div>
            </div>
            <div className={style.retryBtn}>
                <button
                    onClick={() => {
                        router.reload();
                    }}
                >
                    retry
                </button>
            </div>

            <section className={style.shareSec}>
                <Share />
            </section>
        </div>
    );
}
