import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="billCunningham" title="Bill Cunningham">
        <Image
            src="/billCunningham.png"
            alt="Bill Cunningham"
            caption="Bill Cunningham"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">Bill Cunningham was born on 20 July 1921 in 43 St. Ignatius Road in Drumcondra to William Cunningham and Elizabeth Ennis.</span></p>
         
          <Image
            src="/youngBill.png"
            alt="Young Bill Cunningham"
            caption="Bill Cunningham as a young boy"
            float="right"
            width={300}
            height={24}
          /> 
          <p>Bill attended St. Canice&#39;s National School, followed by the O&#39;Connell Christian Brother School in Dublin.  Later, he trained as an uplholsterer and worked in Clery&#39; department store on O&#39;Connell Street in Dublin City.  During the Second World War, Bill enlisted in the Local Defence Forces and served in the 41st Battalion in North Dublin.  When Ireland became a republic in 1949, as an upholsterer in Clerys, Bill made the banners that would drape the GPO for the official celebrations on 18 April of that year.</p>
          <Image
            src="/gpo.png"
            alt="Bill Cunningham banners"
            caption="Bill&#39;s banners draping the GPO on Ireland&#39;s &#39;Republic&#39; Day in 1949"
            width={300}
            height={24}
          /> 
          
          <p>In 1950, Bill married Josephine Duignan and they lived together in 35 Clontarf Park in Dublin.  But due to ill health, Bill was advised to move further inland and they purchased a house in the new residential suburb of Finglas.  Bill and Josephine would go on to have four children.</p>
          <p>After moving to Finglas, Bill became very proactive in working to develop better facilities and ameneties for the residents in this new area and he co-formed and led the East Finglas Development Association.  In this capacity, he was very active and his work was regularly reported in the Dublin newspapers at the time.  He formed his own local newspaper called the &#39;Finglas Digest&#39;.</p>
          <Image
            src="/billCunninghamSpeech.png"
            alt="Bill Cunningham speech"
            caption="Bill Cunningham making a speech"
            width={300}
            height={24}
            float="right"
          /> 
          <p>Bill&#39;s work caught the attention of the local Clann na Poblachta representative, Fion&aacute;n Breathnach, who went on to recruit Bill into the party.  Bill formed the Finglas Craobh for Clann na Poblachta and led the local organisation.  His political work brought him into contact with the party leader and future Nobel Peace Prize winner, Se&aacute;n MacBride, who would attend meetings in Bill&#39;s home in Finglas.  Bill ran alongside Fion&aacute;n Breathnach in the 1955 local elections in Dublin.  However, he unfortunately failed to get elected.</p>
          <p>In the late 1950s, Bill developed tuberculosis, which had claimed the life of his older brother, Se&aacute;n, in 1951.  On 8 April 1960, Bill died in St. Lawrence Hospital in Dublin at the age of 38.  He was buried with his grandparents and brother in Glasnevin Cemtery.</p>
          <Image
            src="/clannMeeting.png"
            alt="Bill Cunningham at a Clann na Poblachta meeting"
            caption="Bill Cunningham, second from left, at a Clann na Poblachta meeting"
            width={300}
            height={24}
          /> 
        </ContentPage>
    </>;
  }