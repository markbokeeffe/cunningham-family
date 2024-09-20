import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="williamCunningham" title="William Cunningham">
        <Image
            src="/williamCunningham.png"
            alt="William Cunningham"
            caption="William Cunningham"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">William Cunningham was born on College Road in Galway City on 10 March 1880 to John Cunningham and Mary Anne Holmes O'Brien.</span></p>
          <span style={{ marginTop: "40px", display: "block"}}><Image
            src="/william_cunningham_birth_cert.png"
            alt="William Cunningham birth cert"
            caption="William Cunningham&#39;s birth certificate"
            width={380}
            height={24}
            float="right"
          /> 
          </span>
         <p>Whilst circumstantial evidence suggests that William's father, John Cunningham, was from Drumcliffe in Co. Sligo, this is not known for sure.  At the time of William's birth in 1880, John was a labourer.</p>  
         <p>Although William was baptised and raised as a Catholic, his mother, Mary, was from a Church of Ireland family in Rosses Point in Co. Sligo.  She was from a large family.  Her mother was Mary Ewing and her father, Stephen Holmes O'Brien, was a retired soldier (a private in the 79th Highlanders) and veteran of the Crimean War in 1854-55.</p>
         <span style={{ marginTop: "40px", display: "block"}}><Image
            src="/rosses_point.png"
            alt="Rosses Point"
            caption="Rosses Point in Co. Sligo, where William&#39;s mother&#39;s family, the Holmes O'Brien family, came from."
            width={380}
            float="right"
            height={24}
          /></span>
        
         <p>Some time between William's birth in 1880 and 1901, William moved with his mother, Mary, to Dublin, and they lived in 4 Graham's Row, near Wellington Street.  On 24 January 1908, Mary died in her home in Graham's Row, and on 11 April of the following year in 1909, William married his wife, Elizabeth Ennis, in St. Catherine&#39;s Church on Meath Street in Dublin.</p>

         <p>Following their marriage, William and Elizabeth moved to St. Ignatius Road in Drumcondra and initially lived in number 77.  Their first child, Margaret Mary (May), was born on 28 November 1910.  Soon afterwards, the family moved to number 43 St. Ignatius Road.  The family would remain there for many decades - until 1991.</p>
         <p>William worked in Arnott&#39;s department store on Dublin&#39;s Henry Street and he continued to work there for the remainder of his career.  In 1928, William&#39;s father, John Cunningham, was by then living with the family in 43 St. Ignatius Road and on 8 June of that year, he died.  By that time, John had been working as a gardener with the Board of Works.  (In the years prior to his death, John had previously worked as a coachman.)  It is not known where John was in the time between William&#39;s birth and this time in 1928.</p>
        <Image
            src="/arnotts.png"
            alt="Arnotts"
            caption="Arnotts Department Store, where William worked for many years"
            width={280}
            height={24}
          /> 
         
         <p>In the subsequent years, William would travel to the west, to the part of Co. Sligo where his parents were from, and visited a Cunnnigham family who ran the local post office in Drumcliffe.</p>
         <p>In 1951, William&#39;s older son, Se&aacute;n passed away from tuberculosis at the age of 34.  In tne years subsequent to this, William was received into the Third Order of St. Francis in Church Street in Dublin.  He was received on 22 January 1953 and professed om 11 February 1954.</p>
         <Image
            src="/williamElizabethBill.png"
            alt="William, Elizabeth and Bill Cunningham"
            caption="William with his wife, Elizabeth, and son, Bill"
            width={380}
            height={24}
            float="right"
          /> 
        
         <p>In 1960, William lost his younger son, Bill, who died in April of that year at the age of 38.  The following year, in 1961, he was widowed when his wife, Elizabeth, died.  In the remaining years, William continued to live in 43 St. Ignatius Road with his daughter, May.</p>

         
         <p>William died on 19 December 1966 at the age of 86, and was buried in Glasnevin Cemtery with his parents, wife and sons.</p>
         <span style={{ marginTop: "40px", display: "block"}}><Image
            src="/williamDrumcliffe.png"
            alt="William in Drumcliffe"
            caption="William with the Cunningham family of Drumcliffe, Co. Sligo"
            width={180}
            height={24}
          /> </span>
          <span style={{ marginTop: "40px", display: "block"}}><Image
            src="/williamOld.png"
            alt="William in later years"
            caption="William in later years"
            width={243}
            height={24}
            clear={false}
          /> </span>

        </ContentPage>
    </>;
  }