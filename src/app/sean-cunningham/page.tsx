import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="seanCunningham" title="Se&aacute;n Cunningham">
        <Image
            src="/seanCunningham.png"
            alt="Se&aacute;n Cunningham"
            caption="Se&aacute;n Cunningham"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">Se&aacute;n Cunningham was born on 6 July 1917 in 43 St. Ignatius Road in Dublin to William Cunningham and Elizabeth Ennis.</span></p>
          <p>Se&aacute;n attended St. Canice&#39;s National School, followed by the O&#39;Connell Christian Brother School.</p>
          <p>Later, he began working as a clerk and was also active in St. John&#39;s Ambulance Brigade.  On the night of the German bombings of North Strand on 30 / 31 May 1941, Se&aacute;n ran in uniform from his home on St. Ignatius Road to North Strand after he heard the explosions and assisted in the rescue and recovery operation.</p>
          <Image
            src="/sean_ambulance.png"
            alt="Se&aacute;n whilst working with St. John&#39; Ambulance Brigade"
            caption="Se&aacute;n whilst working with St. John&#39; Ambulance Brigade"
            float="right"
            width={300}
            height={24}
          /> 
          
          <p>When in his early 30s, Se&aacute;n contracted tuberculosis.  He died on 12 September 1951 at the age of 34 and was buried along with his grandparents in Glasnevin Cemetery.</p>
         

  

        
          

        </ContentPage>
    </>;
  }