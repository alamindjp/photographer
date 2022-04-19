import { useEffect, useState } from 'react';

const useDatas = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('services.json').then(res => res.json()).then(data => setDatas(data))
      }, [])
      return [datas, setDatas]
};

export default useDatas;