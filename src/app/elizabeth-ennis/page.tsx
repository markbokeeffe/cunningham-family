import ContentPage from '../components/Page';
import Image from '../components/Image';

export default function Page() {
    return <>
        <ContentPage id="elizabethEnnis" title="Elizabeth Ennis">
        <Image
            src="/elizabethEnnis.png"
            alt="Elizabeth Ennis"
            caption="Elizabeth Ennis"
            float="left"
            width={300}
            height={24}
          /> 
          <p><span style={{ color: '#052003' }} className="font-bold">Elizabeth Ennis was born in Dunsoghly in rural north County Dublin on 6 March 1881 to Michael Ennis and Margaret Larkin.</span></p>
         
          <Image
            src="/dunsoghly_castle.png"
            alt="Dunsoghly Castle"
            caption="Dunsoghly Castle in north county Dublin, which would have towered over the Ennis family home"
            width={300}
            height={24}
            float="right"
          /> 
          <p>Elizabeth lost her father just after her first birthday in 1882, and she continued to live after that in Dunsoghly with her mother and siblings.  When she was older, she went to live with her aunt, Elizabeth Campbell n&eacute;e Larkin and her cousins in 12 Eugene Street in south Dublin city.  Several of those cousins fought in the First World War and one of them - Frank Campbell - was killed in action in 1917.  Another of the cousins, Jack Campbell, was an Old Contemptible during the war.  In 1914, during the retreat from Mons, he saved the life of a Captain Patrick Bowes-Lyon: the brother of Britain's future Queen Consort Elizabeth and uncle of the future Queen Elizabeth II.</p>
          <Image
            src="/jack_campbell.png"
            alt="Jack Campbell"
            caption="Elizabeth&#39;s cousin, Jack Campbell, telling RT&Eacute; Gay Byrne about his war-time experiences in 1988"
            width={300}
            height={24}
          />
          <p>On 11 April 1909, Elizabeth married William Cunningham in St. Catherine&#39;s Church on Meath Street in Dublin.  Subsequently, they moved to 77 St. Ignatius Road in Drumcondra.</p>
          <Image
            src="/elizabeth_young.png"
            alt="Young Elizabeth"
            caption="A young Elizabeth"
            width={300}
            height={24}
            float="right"
          /> 
          
          <p>On 28 November 1910, Elizabeth gave birth to her first child, Margaret Mary (May).  A number of years later, the family then moved to 43 St. Ignatius Road.</p>
          <p>On 6 July 1917, Elizabeth&#39;s first son, Se&aacute;n was born and on 20 July 1921, her youngest child, William Oliver (Bill), was born.</p>
          <Image
            src="/elizabeth_sons.png"
            alt="Elizabeth with her sons"
            caption="Elizabeth with sons, Se&aacute;n and Bill"
            width={300}
            height={24}
          /> 
          <p>Sadly, Elizabeth&#39;s two sons predeceased her.  Se&aacute;n at the age of 34 in 1951 and Bill died on 8 April 1921.</p>
          <p>Elizabeth died at the age of 80 on 20 July 1961, on what would have been her late son Bill&#39;s fortieth birthday.  She was buried with her sons and parents-in-law in Glasnevin Cemetery.</p>
          <Image
            src="/elizabeth_old.png"
            alt="Elizabeth in later years"
            caption="Elizabeth in later years"
            width={300}
            height={24}
            float="right"
          /> 
          
    
        </ContentPage>
    </>;
  }