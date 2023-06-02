import React from 'react'
import image3 from '../../../assets/Frame 208.png'
import image2 from '../../../assets/Frame 203.png'
import image1 from '../../../assets/Frame 193.png'
import Article from '../Article'
import './styles.css'

const Stage = () => {
  return (
    <div id="stages">

        <div className='stages'>

            <img src={image1} alt='' />

            <Article className='stage'
              title='First Trimester(week 0 -12)'
              text1='The first trimester of pregnancy is an exciting time as your body begins to undergo significant changes to support the growth and development of your baby. 
                    During this time, you may experience a range of physical and emotional symptoms.'
              text2='One of the earliest signs of pregnancy is a missed period, but other common symptoms of the first trimester include nausea, vomiting, fatigue, breast tenderness, and frequent urination. 
                    These symptoms are caused by hormonal changes in your body as it prepares for pregnancy.'
              text3='As your pregnancy progresses, you may notice other changes in your body, such as weight gain, changes in appetite, and an increase in vaginal discharge. 
                    Your uterus will also begin to expand to accommodate the growing fetus, which can cause mild cramping and discomfort.'
              text4='In addition to physical changes, you may also experience emotional changes during the first trimester. 
                    Many women feel anxious, irritable, or moody during this time, which is perfectly normal.'
              text5='To support your growing baby and maintain your own health during the first trimester, it is important to eat a healthy, balanced diet, 
                    get plenty of rest, and avoid alcohol, tobacco, and other harmful substance'
            />

        </div>

        <div className='stages'>

            <Article className='stage'
              title='Second Trimester(week 13 -28)'
              text1='The second trimester of pregnancy is often considered the "honeymoon phase" as many women begin to feel better and more energetic than they did during the first trimester. 
                    During this time, your body will continue to undergo significant changes as your baby grows and develops.'
              text2='One of the most noticeable changes during the second trimester is your growing belly. Your uterus will continue to expand, and you may begin to feel your babys movements for the first time. 
                    Other physical changes may include stretch marks, swollen ankles, and varicose veins.'
              text3='While some symptoms of the first trimester may improve during the second trimester, others may persist or even worsen. For example, heartburn and constipation are common complaints during this time. 
                    You may also experience occasional dizziness, headaches, and back pain.'
              text4='Along with physical changes, you may also experience emotional changes during the second trimester. Many women feel more connected to their baby and may begin to plan for their arrival. 
                    However, anxiety and mood swings can still be common.'
            />

            <img src={image2} alt='' />
          
        </div>

        <div className='stages'>

            <img src={image3} alt='' />

            <Article className='stage'
              title='Third Trimester(week 29 -40)'
              text1='The third trimester of pregnancy is the final stretch before your babys arrival, and your body will undergo some significant changes during this time. 
                    As your baby grows and prepares for birth, you may experience physical and emotional symptoms that can be challenging.'
              text2='One of the most noticeable changes during the third trimester is your growing belly. Your uterus will continue to expand, and you may experience discomfort or 
                    pain in your back, hips, or pelvis. You may also experience Braxton Hicks contractions, which are practice contractions that help prepare your body for labor.'
              text3='Other physical symptoms of the third trimester may include shortness of breath, frequent urination, and difficulty sleeping. You may also experience swelling in your feet and ankles, as well as increased fatigue.'
              text4='As your due date approaches, you may also experience emotional symptoms such as anxiety, excitement, and impatience. Many women feel ready for their baby to arrive and may begin to prepare for labor and delivery.'
            />

        </div>

    </div>
  )
}

export default Stage