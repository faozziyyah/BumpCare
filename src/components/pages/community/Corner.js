import React from 'react'
import image from '../../../assets/Rectangle 550.png'
import image1 from '../../../assets/Rectangle 551.png'
import image2 from '../../../assets/Rectangle 553.png'
//import image3 from '../../../assets/Rectangle 550.png'

const Corner = () => {
  return (
    <main className="corner-tips">

        <section className="corner-top">

            <div className="tip">

              <div className="image">
                <p>The Importance of Skin-to-Skin Contact with Your Newborn</p>
                <img src={image1} alt="" />
              </div>

              <article>
                <h3>The Importance of Skin-to-Skin Contact with Your Newborn</h3>
                <p>Skin-to-skin contact between a mother and her newborn is an important part of bonding and can have significant benefits for both the baby and the mother. 
                  This contact can regulate the baby's body temperature, heart rate, and breathing while also helping to establish breastfeeding. 
                  For the mother, skin-to-skin contact can help release hormones that promote relaxation and bonding with the baby. 
                  It is recommended that skin-to-skin contact begins as soon as possible after birth and continues frequently throughout the early days and weeks of life.
                </p>
              </article>

            </div>

            <div className="tip">

              <div className="image">
                <p>The utmost benefits of Babywearing</p>
                <img src={image} alt="" />
              </div>

              <article>
                <h3>The utmost benefits of Babywearing every mom needs</h3>
                <p>This article discusses the many benefits of babywearing for both parent and child. 
                  Babywearing can help with bonding, calming fussy babies, and promoting physical development. 
                  It also allows for more freedom and mobility for the parent while still being able to keep the baby close.
                   Different types of baby carriers are discussed and tips for safe babywearing are provided.
                   This is highly recommended for new moms, pro moms and moms to be.
                </p>
              </article>
              
            </div>

        </section>

        <section className="corner-bottom">

            <div className="tip">

              <div className="image">
                <img src={image1} alt="" />
              </div>

              <article>
                <h3>Breastfeeding, Benefits for Baby and Mom</h3>
                <p>Breastfeeding is an important aspect of infant care that provides numerous benefits for both the baby and mother. 
                  Breast milk contains essential nutrients and antibodies that help protect the baby from infections and illnesses. 
                  It also promotes healthy growth and development, and has been linked to a reduced risk of Sudden Infant Death Syndrome (SIDS). 
                  For mothers, breastfeeding can help reduce the risk of certain cancers and may promote faster postpartum weight loss. 
                  Additionally, it can create a special bond between mother and baby. 
                </p>
              </article>
            </div>

            <div className="tip">

              <div className="image">
                <p>Navigating Breastfeeding Challenges:Tips and Tricks for New Moms</p>
                <img src={image1} alt="" />
              </div>

              <article>
                <h3>Navigating Breastfeeding Challenges ; Tips and tricks</h3>
                <p>Breastfeeding can be a wonderful bonding experience between mother and baby, but it can also come with its own set of challenges. 
                  Many new moms may struggle with issues such as low milk supply, sore nipples, and difficulty latching. 
                  However, with the right techniques and resources, these challenges can be overcome.
                  To start, it is important to find a comfortable position for both mom and baby during breastfeeding. 
                  This can vary depending on the individual, but many find that the "football hold" or "cross-cradle hold" are helpful. 
                  Making sure that the baby's mouth is properly latched onto the nipple is also crucial, as an improper latch can cause soreness and pain.
                </p>
              </article>
            </div>
            
        </section>

    </main>
  )
}

export default Corner