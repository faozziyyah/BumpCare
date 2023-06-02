import React from 'react'
import Article from '../Article'
import sex from '../../../assets/Group 3853.png'
import track from '../../../assets/Group 3854.png'
import nutrition from '../../../assets/Group 3855.png'
import health from '../../../assets/Group 3856.png'
import therapies from '../../../assets/Group 3857.png'
import management from '../../../assets/Group 3858.png'

const ArticleContent = () => {
  return (
    <div id="article-content">

      <div className="article-container">

        <Article className="article" 
          image={track} 
          title='track ovulation'
          text1='An ovulation tracker is a helpful tool for women who are trying to conceive. 
                It can help you identify your fertile window, which is the time when you are most likely to get pregnant.'
          text2='There are a variety of ovulation trackers available, 
                from simple apps that you can download on your phone to more advanced fertility monitors.'
          text3='Some of the most popular ovulation tracking methods include: 
                Ovulation prediction kit, Basal body temperature, Fertility tracking apps or just by tracking your menstrual cycle.'
        />

        <Article className="article" 
          image={nutrition} 
          title='Nutrition'
          text1='Nutrition is an important factor for women who are trying to get pregnant. A healthy, 
                balanced diet can help support your reproductive health and increase your chances of conceiving.'
          text2='Here are some key nutrients to focus on: Folic Acid, Iron, Calcium, Omega-3 fatty acids.In addition to these key nutrients , 
                it is important to maintain a healthy, balanced diet that includes plenty of fruits, vegetables, whole grains and lean proteins.'
          text3='Avoiding processed foods, sugary drinks, and excessive alcohol intake can also help support your reproductive health.'
        />

      </div>

      <div className="article-container">

        <Article className="article" 
          image={sex} 
          title='Sex'
          text1='Sex is a critical factor for women who are trying to get pregnant. In order to conceive, sperm must meet with an egg during a woman fertile window. 
                Here are some tips to help maximize your chances of getting pregnant:'
          text2='1. Timing; its important to have intercourse during which is typically the 5-day period leading to ovulation.'
          text3='2. Frequency; having intercourse every other day during your fertile window can help ensure that sperm is present when egg is released.'
          text4='3. Positions; some women find that lying on their back with a pillow under their hips after intercourse can help the sperm reach the cervix easily.'
        />

        <Article className="article" 
          image={health} 
          title='Health & Fitness'
          text1='Fitness and health are important factors for women who are trying to get pregnant. Maintaining a healthy lifestyle can help support your reproductive health 
                and increase your chances of conceiving. Here are some tips to help optimize your health and fitness: '
          text2='1. Exercise; regular exercise can help maintain a healthy weight, improve circulation , and reduce stress.'
          text3='2. Weight management; maintaining a healthy weight is important for fertility.'
          text4='3. Smoking & Alcohol; Smoking & excessive alcohol intake can can harm fertility and increase the risk of miscarriage.'
        />

      </div>

      <div className="article-container">

        <Article className="article" 
          image={therapies} 
          title='Alternative Therapies'
          text1='Alternative therapies for getting pregnant refer to a range of non-traditional approaches that some women may consider when trying to conceive. 
                These therapies may include practices such as acupuncture, herbal medicine, dietary changes, and gestational carriers.'
          text2='Acupuncture for example is a chinese practice that involves  the insertion of thin needles into specific points of the body.
                some studies suggests that acupuncture may improve fertility by increasing blood flow to reproductive organs.'
          text3='Herbal medicine is another alternative therapy that may be used to boost fertility. 
                Certain herbs like red clover, raspberry leaf, and nettle leaf are believed to support hormonal and balance and enhance overall fertility.'
          text4='IVF involves fertilizing eggs outside the body and then implanting them into the uterus, 
                while surrogacy involves using a gestational carrier to carry and give birth to a baby.'
        />

        <Article className="article" 
          image={management} 
          title='Stress Management'
          text1='When trying to get pregnant, managing stress can be an essential part of the process. 
                High levels of stress can interfere with ovulation and the menstrual cycle, making it more challenging to conceive.'
          text2='There are several stress management techniques that can help reduce stress and increase the chances of getting pregnant. 
                One effective technique is mindfulness meditation, which involves focusing on the present moment and being aware of your thoughts and emotions without judgment. 
                This can help you to manage stress and anxiety and reduce the impact it has on your body.'
          text3='Yoga is another stress management technique that can be helpful when trying to conceive. Not only does it help to reduce stress levels, 
                but it can also improve circulation to the reproductive system and promote hormone balance. 
                Additionally, regular exercise such as jogging, swimming, or cycling can help to reduce stress and improve overall health'
        />

      </div>

    </div>
  )
}

export default ArticleContent