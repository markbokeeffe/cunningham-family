import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="mayCunningham" title="May Cunningham">
        <Image
            src="/mayCunningham.png"
            alt="May Cunningham"
            caption="May Cunningham"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">Margaret Mary (May) Cunningham was born on 28 November 1910 to William Cunningham and Elizabeth Ennis.</span></p>
          <p>May initially lived in 77 St. Ignatius Road before her family moved to 43 St. Ignatius Road.  She worked for many years in the Dairy Engineering Company.  She was a lover of animals and enjoyed reading.</p>
          <Image
            src="/mayCunninghamYoung.png"
            alt="A very young May Cunningham"
            caption="May as a young child"
            float="right"
            width={300}
            height={24}
          /> 
          <p>After her parents passed away in 1961 and 1966, May continued to live in 43 St. Ignatius Road until her death at the age of 80 on 14 November 1991.  She was buried with her parents, brothers and grandparents in Glasnevin Cemetery.</p>
        </ContentPage>
    </>;
  }