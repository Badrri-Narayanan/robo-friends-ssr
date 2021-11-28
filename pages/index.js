import Link from 'next/link';
import App from '../container/App';
import 'tachyons';

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()

    return {
        props : {robotsList : data}
    }
}

const Index = ({robotsList}) => (
    <div>
        <Link href="/about"><button className="dark-pink">About</button></Link>
        <App 
            robotsList={robotsList}
        />
    </div>
);

export default Index;