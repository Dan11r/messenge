import React from 'react';
import {Link} from "react-router-dom";
import {Message} from "../../components";

const Home = () => {
    return (
        <div className='home'>
            <Message
                avatar={'https://sun2-3.userapi.com/s/v1/ig2/Dw_4nY3a_cC1Kgb-LOdgRZB0kqtxuHsTnySc86f3Tzk7DgstE4Zp8wGWqintuzI3qo-jJeLNlWlafuWjuW1Bf8vj.jpg?size=50x50&quality=96&crop=106,877,496,496&ava=1'}
                text={'Нет, благодаря наркоманам бедные люди становятся богатыми'}
                date={'Sep 15 2021 13:06:30 GMT+0300 (Москва, стандартное время)'}
            />
            <Message
                avatar={'https://sun2-9.userapi.com/s/v1/ig2/Qgo4ziRDWSKjfOdvAez9zyMZLbOvEezzDWcZG5TOjaATxQaUr-JrwJKaeEDdN4_8w7KPxHzMVoH6mkW2GgFvZqak.jpg?size=50x0&quality=96&crop=0,0,389,389&ava=1'}
                text={'Меня даже на пол видео не хватило'}
                date={'Sep 15 2021 13:06:30 GMT+0300 (Москва, стандартное время)'}
            />
            <Message
                avatar={'https://sun2-3.userapi.com/s/v1/ig2/wk1T1K2k1xCTMtXUKTRDfHZmMP8ffBJYSiRfYuTpP-eTBYAGK4WBwkk604hFpsWNKrB67SHaXLfZ5S2_bcrbdaWX.jpg?size=50x50&quality=96&crop=0,88,734,734&ava=1'}
                text={'Было бы всегда 15 градусов'}
                date={'Sep 15 2021 13:06:30 GMT+0300 (Москва, стандартное время)'}
            />
            <Message
                avatar={'https://sun2-12.userapi.com/s/v1/ig2/1cw23o4AJ3upTa5pKySlqVfSgKncPU4_ENy2TRTLAfhcF94JRorEHGR4J9ZY4vgM-iUutwRxmbg-eUh7d22OHMfC.jpg?size=50x50&quality=96&crop=0,129,722,722&ava=1'}
                text={'Может станешь качком Может станешь качком Может станешь качком Может станешь качком Может станешь качком Может станешь качком'}
                date={'Sep 15 2021 13:06:30 GMT+0300 (Москва, стандартное время)'}
            />
            <Link to={'/auth'}>rtlkhwpj</Link>
        </div>
    );
};

export default Home;
