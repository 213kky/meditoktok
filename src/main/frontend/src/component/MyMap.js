import {useState, useRef, useEffect } from 'react';
import {
    Container as MapDiv,
    NaverMap,
    useNavermaps,
    Overlay,
    useMap,
    Marker,
    InfoWindow,
    Circle
} from 'react-naver-maps';
import pin from './pin.png';
import axios from "axios";

export default function MyMap(props) {
    const navermaps = useNavermaps()
    const [init, setInit] = useState(false)
    const [map, setMap] = useState(null)
    const [myCoordinates, setMyCoordinates] = useState(null)
    const [data, setData] = useState(null);
    const [initLoading, setInitLoading] = useState(false)
    const [circleCenter, setCircleCenter] = useState(null)
    const [circleRadius, setCircleRadius] = useState(1000)
    const [circleZoom, setCircleZoom] = useState(15)
    const myRef = useRef([])


    useEffect(() => {//나중에 모드에 따른 진료 과목 추가해야 함
        if (initLoading) { //numOfRows=10 --> 표시되는 행의 수 (테스트를 위해 10으로 설정)
            console.log("첫 번째 지도 병원 로딩")
            if(props.mode===0){
                props.setInputValue('');
            }
            axios.get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?ServiceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&pageNo=1&numOfRows=100&xPos=${map.getCenter().lng()}&yPos=${map.getCenter().lat()}&radius=1000`)
                .then(response => {
                    props.setMapData(response.data)
                    setData(response.data)
                })
                .catch(error => {
                    console.error(error)
                })
                .finally(() => {
                    // setInitLoading(false)
                })
        }
    }, [initLoading])

    // useEffect(() => {//나중에 모드에 따른 진료 과목 추가해야 함
    //     console.log("HospMAP");
    //     if (loading) { //numOfRows=10 --> 표시되는 행의 수 (테스트를 위해 10으로 설정)
    //         axios.get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?ServiceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&pageNo=1&numOfRows=100&xPos=${map.getCenter().lng()}&yPos=${map.getCenter().lat()}&radius=${circleRadius}`)
    //             .then(response => {
    //                 props.setMapData(response.data)
    //                 setData(response.data)
    //             })
    //             .catch(error => {
    //                 console.error(error)
    //             })
    //             .finally(() => {
    //                 setLoading(false)
    //             })
    //     }
    // }, [loading])
    function reSearch() {//나중에 모드에 따른 진료 과목 추가해야 함
        console.log("재검색");
        if(props.mode===0){
            props.setInputValue('');
        }
        //numOfRows=10 --> 표시되는 행의 수 (테스트를 위해 10으로 설정)
        axios.get(`https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList?ServiceKey=%2Fzt1jmOZn0y5Q8ql8mxBIKRoXvyqetyRjCvZUNCV6OCXxnnYWFFZUnNcW5E2yCax4iZMPg%2FAbMM%2FpAw7%2BeYhtQ%3D%3D&pageNo=1&numOfRows=100&xPos=${map.getCenter().lng()}&yPos=${map.getCenter().lat()}&radius=${circleRadius}`)
            .then(response => {
                props.setMapData(response.data)
                setData(response.data)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
            })
    }


    // function mapSearch() {
    //     // center = map.getCenter()
    //     // setLoading(true)
    //     // setCircleCenter(map.getCenter())
    //     // props.setMapX(center.lng())//경도
    //     // props.setMapY(center.lat())//위도
    //     // props.setMapLoading(true)
    // }

    function onSuccessGeolocation(position) {

        const location = new navermaps.LatLng(
            position.coords.latitude,
            position.coords.longitude,
        )
        setMyCoordinates(location)
        map.setCenter(location)
        map.setZoom(circleZoom)
        setInitLoading(true)
        console.log('Coordinates: ' + location.toString())
    }

    function onErrorGeolocation() {
        alert('위치 액세스를 허용해주세요.')
        // const center = map.getCenter()
        // props.setMapX(center.lng())//경도
        // props.setMapY(center.lat())//위도
        // props.setMapLoading(true)
        setInitLoading(true)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                onSuccessGeolocation,
                onErrorGeolocation,
            )
        } else {


            alert('지도 오류')
        }
    }

    useEffect(() => {
        if (!map) {
            return
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                onSuccessGeolocation,
                onErrorGeolocation,
            )
        } else {
            alert('지도 오류')
        }
    }, [map])

//###
    function MyCustomControl() {
        const locationBtnHtml = `
    <a href="#" 
      style="
        z-index: 100;
        overflow: hidden;
        display: inline-block;
        position: absolute;
        top: 7px;
        left: 5px;
        width: 34px;
        height: 34px;
        border: 1px solid rgba(58,70,88,.45);
        border-radius: 2px;
        background: #fcfcfd;
          background-clip: border-box;
        text-align: center;
        -webkit-background-clip: padding;
        background-clip: padding-box;
      "
    >
      <span style="
        overflow: hidden;
        display: inline-block;
        color: transparent !important;
        vertical-align: top;
        background: url(https://ssl.pstatic.net/static/maps/m/spr_trff_v6.png) 0 0;
          background-position-x: 0px;
          background-position-y: 0px;
          background-size: auto;
        background-size: 200px 200px;
        -webkit-background-size: 200px 200px;
        width: 20px;
        height: 20px;
        margin: 7px 0 0 0;
        background-position: -153px -31px;
      ">NAVER 그린팩토리</span>
    </a>`
        const navermaps = useNavermaps()
        const map = useMap()
        // customControl 객체 이용하기
        // Customize Overlay 참고
        // https://zeakd.github.io/react-naver-maps/guides/customize-overlays/
        const [customControl1] = useState(() => {
            return new navermaps.CustomControl(locationBtnHtml, {
                position: navermaps.Position.TOP_LEFT,
            })
        })

        useEffect(() => {
            // naver.maps.Event.addDOMListener 사용할 필요 없이, native addEventListener를 사용합니다.
            // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
            const domElement = customControl1.getElement()
            const domListener = () => {
                map.setCenter(new navermaps.LatLng(myCoordinates))
            }

            domElement.addEventListener('click', domListener)

            return () => {
                domElement.removeEventListener('click', domListener)
            }
        }, [])

        return <Overlay element={customControl1}/>
    }

    const renderMarker = () => {
        if (data === null) {
            return
        }
        if (data.response.body.totalCount === 0) {
            return
        } else if (data.response.body.totalCount == 1) {
            const item = data.response.body.items.item;
            return (
                <>
                    <InfoWindow ref={el => myRef.current[0] = el} content={
                        '<div style="padding:10px;">' +
                        item.yadmNm +
                        '</div>' +
                        `<a style="padding: 10px; text-decoration: underline; font-size: 13px; color: blue;" href=/hospital_information/?yadmNm=${item.yadmNm}&addr=${item.sgguCdNm} >` + '병원 정보 페이지' + '</a>'}/>
                    <Marker position={new navermaps.LatLng(item.YPos, item.XPos)} onClick={() => {
                        if (myRef.current[0].getMap()) {
                            myRef.current[0].close()
                        } else {
                            myRef.current[0].open(map, new navermaps.LatLng(item.YPos, item.XPos))
                        }
                    }}/>

                </>
            )
        }
        const items = data.response.body.items.item;
        return items.map((item, index) => {
                return (
                    <>
                        <InfoWindow ref={el => myRef.current[index] = el} content={
                            '<div style="padding:10px;">' +
                            item.yadmNm +
                            '</div>' +
                            `<a style="padding: 10px; text-decoration: underline; font-size: 13px; color: blue;" href=/hospital_information/?yadmNm=${item.yadmNm}&addr=${item.sgguCdNm} >` + '병원 정보 페이지' + '</a>'}/>
                        <Marker position={new navermaps.LatLng(item.YPos, item.XPos)} onClick={() => {
                            if (myRef.current[index].getMap()) {
                                myRef.current[index].close()
                            } else {
                                myRef.current[index].open(map, new navermaps.LatLng(item.YPos, item.XPos))
                            }
                        }}/>

                    </>
                )
            }
        )

    }

    useEffect(() => {
        if (!map) {
            return
        }
        setTimeout(() => { //수정해야함
            // 일정 시간이 지난 후에 실행될 코드
            setCircleCenter(map.getCenter())
        }, 500);


    }, [init && map.getCenter()])

    const renderCircle = () => {
        if (!map) {
            return
        } else if (circleCenter != null) {
            return (
                <Circle center={circleCenter} fillColor={"rgba(255,0,0,0.3)"} fillOpacity={0.3} radius={circleRadius}
                        strokeColor={"red"} strokeWeight={1}
                        clickable={false}/>
            )
        }
    }

    function minusRadius() {
        if (circleRadius === 500) return
        else if (circleRadius === 1000) {
            setCircleRadius(500)
            setCircleZoom(15)
        } else if (circleRadius === 1500) {
            setCircleRadius(1000)
            setCircleZoom(15)
        } else if (circleRadius === 2000) {
            setCircleRadius(1500)
            setCircleZoom(14)
        } else if (circleRadius === 2500) {
            setCircleRadius(2000)
            setCircleZoom(14)
        }
    }

    function plusRadius() {
        if (circleRadius === 2500) return
        else if (circleRadius === 2000) {
            setCircleRadius(2500)
            setCircleZoom(13)
        } else if (circleRadius === 1500) {
            setCircleRadius(2000)
            setCircleZoom(14)
        } else if (circleRadius === 1000) {
            setCircleRadius(1500)
            setCircleZoom(14)
        } else if (circleRadius === 500) {
            setCircleRadius(1000)
            setCircleZoom(15)
        }
    }

    useEffect(() => {
        if (!map) return
        map.setZoom(circleZoom)
    }, [circleZoom])
    return (
        <>
            <MapDiv
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '90%',
                    border: '2px solid black',
                }}
            >
               <NaverMap
                    // uncontrolled
                    defaultCenter={new navermaps.LatLng(37.5666805, 126.9784147)}
                    defaultZoom={circleZoom}
                    defaultMapTypeId={navermaps.MapTypeId.NORMAL}
                    ref={setMap}
                    onInit={() => {
                        setInit(true)
                    }}
                >
                    {init && <MyCustomControl/>}
                    {renderMarker()}
                    {renderCircle()}
                </NaverMap>

                <img src={pin} style={{
                    position: 'absolute',
                    right: '43.4%',
                    top: '41%',
                    width: '50px',
                    height: '50px',
                    pointerEvents: 'none',
                }}></img>
            </MapDiv>
            <div>
                <div className="setRadius">
                    <div className="plusMinus" onClick={minusRadius}>-</div>
                    <div className="radius">{circleRadius}m 반경</div>
                    <div className="plusMinus" onClick={plusRadius}>+</div>
                </div>
                <div className="mapSearch" onClick={reSearch}>현 지도에서 검색</div>
            </div>
        </>
    )
}