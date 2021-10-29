import Layout from '../components/Layout';
import img1 from '../images/img1.png';
import HomeIndex from '../components/HomeIndex';
import { Heading4 } from '../components/Typography';

export default function Index() {
  return (
    <Layout section={{
      title: 'homepage',
    }}
    >

      <div className="container-fluid bg-primary first-section">
        <div className="row align-items-center h-100">
          <div className="col-10 offset-1 position-relative">
            <img src={img1} className="img-fluid w-100" alt="..." />
            <h1 className="position-absolute serif fw-bolder" style={{ bottom: '15%', left: '10%' }}>Out of the Flames</h1>
            <h3 className="position-absolute serif fw-bolder" style={{ bottom: '10%', left: '10%' }}>Exploring online engagement around the 2019 Amazon rainforest fires</h3>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-primary py-5">
        <div className="row">
          <div className="col-2 offset-1">
            <Heading4 text="The Project" />
          </div>
          <div className="col-7 offset-1">
            <p>
              Through Out of the Flames, we explored online engagement and public narratives around forest-related issues, taking the 2019 Amazon rainforest fires as a case study. Using social media data from Twitter, Facebook, Google, Instagram and YouTube, we sought to understand the public narratives and forms of engagement, participation and experience that emerged around this event at the peak of its international coverage.

            </p>
            <p>
              From a series of analyses, we identified three distinct areas relevant to our main inquiry and summarised the key insights as Issue Stories.
              {' '}
            </p>
          </div>
        </div>
      </div>

      <HomeIndex />

    </Layout>
  );
}

{ /*
      <StaticImage
        src="../images/icon.png"
        alt="static image"
        width={200}
        height={200}
      />
 */ }
