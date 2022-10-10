import styles from "./style.module.css";

/** Components */
import AboutMeetup from '../../components/AboutMeetup';
import Footer from '../../components/Footer';
import MemberCard from '../../components/MemberCard';
import NextMeetupCard from '../../components/NextMeetupCard';
import PastMeetupCard from '../../components/PastMeetupCard';
import RecentMeetupCard from '../../components/RecentMeetupCard';
import SectionTitle from '../../components/SectionTitle';

const Home = () => {
  return (
    <div>
      <RecentMeetupCard 
        details={{
          title: "Hacktiv8 Meetup",
          location: "Jakarta, Indonesia",
          members: 1078,
          organizers: "Adhy Wiranata"
        }}
      />
      <SectionTitle title="Next Meetup" isSeeAll={false} />
      <NextMeetupCard />
      <SectionTitle title="About Meetup" isSeeAll={false} />
      <AboutMeetup />
      <SectionTitle title="Members" isSeeAll={true} />
      <MemberCard position="Organizers" name="Adhy Wiranata    4 others." />
      <SectionTitle title="Past Meetups" isSeeAll={true} />
      <div className={styles.past_container}>
        <PastMeetupCard 
          date="27 November 2017" 
          text="#39 JakartaJS April Meetup with kumparan"
          went={139} 
        />
        <PastMeetupCard 
          date="27 October 2017" 
          text="#38 JakartaJS April Meetup with Blibli"
          went={113} 
        />
        <PastMeetupCard 
          date="27 September 2017" 
          text="#37 JakartaJS April Meetup with Hacktiv8"
          went={110} 
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
