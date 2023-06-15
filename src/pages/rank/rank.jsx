import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { get as getApi } from '../../../api';
import RankCard from '../../components/rankcard/rankcard';
import UserCard from '../../components/user/usercard';
import RankPageSentence from '../../components/rankpagesentence/rankpagesentence';
import PointBar from '../../components/pointbar/pointbar';

function Rank() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [rankList, setRankList] = useState([]);
    const [point, setPoint] = useState();
    const [isFetchCompleted, setIsFetchCompleted] = useState(false);

    const userId = localStorage.getItem('userId');

    const fetchOwner = useCallback(
        async ownerId => {
            try {
                // 유저 id를 가지고 "/user/유저id" 엔드포인트로 요청해 사용자 정보를 불러옴.
                const res = await getApi(`user/${ownerId}`);
                // 사용자 정보는 response의 data임.
                const ownerData = res.data.userInfo;
                // portfolioOwner을 해당 사용자 정보로 세팅함.
                setUser(ownerData);
                // fetchOwner 과정이 끝났으므로, isFetchCompleted를 true로 바꿈.
                setIsFetchCompleted(true);
            } catch (err) {
                // if (err.response.status === 400) {
                //     alert('유저 정보를 불러오는데 실패하였습니다.');
                // }
                console.log('유저 정보를 불러오는데 실패하였습니다.', err);
            }
        },
        [userId],
    );

    const fetchRank = useCallback(async () => {
        try {
            const res = await getApi('rank/list');
            const ownerData = res.data;
            setRankList(ownerData.rankList);

            const point = await getApi('user/point');
            setPoint(point.data.userPoint.accuPoint);

            const countRes = await getApi('post/count');
            setCount(countRes.data)
            console.log(countRes.data)

        } catch (err) {
            alert(err.response.data.error);
            console.log(err.data.response.message);
        }
    }, []);

    useEffect(() => {
        fetchRank();
        fetchOwner(userId);
    }, [fetchRank, fetchOwner]);

    if (!isFetchCompleted) {
        return 'loading...';
    }

    return (
        <div>
            <div className="headerSection" style={{ height: '150px' }}></div>
            <div>
                <RankPageSentence />
            </div>
            <div>
                <PointBar point={point} />
            </div>
            <div>
                <UserCard user={user} point={point} />
            </div>
            <div className="headerSection" style={{ height: '50px' }}></div>
            <p>랭킹</p>
            <div className="w-full">
                {rankList.map((owner, index) => (
                    <div key={owner.userId} onClick={() => navigate(`/mypage/${owner.userId}`)}>
                        <RankCard user={owner} index={index + 1} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rank;
