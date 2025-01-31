import stockholmImg from '../../assets/Stockholm.jpg'

function Home() {
    return ( 
        <div>
            <img src={stockholmImg} alt="Stockholm stad" style={{ width: '300px', height: 'auto' }} />
        </div>
     );
}

export default Home;