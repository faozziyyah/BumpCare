import React from 'react'
import food1 from '../../../assets/Rectangle 392.png'
import food2 from '../../../assets/Rectangle 393.png'
import food3 from '../../../assets/Rectangle 394.png'
import food4 from '../../../assets/Rectangle 395.png'
import food5 from '../../../assets/Rectangle 396.png'
import food6 from '../../../assets/Rectangle 397.png'
import food7 from '../../../assets/Rectangle 398.png'

const Nutrition = () => {
  return (
    <div id="bottom">

        <section id="nutritio-gallery" style={{width: '40%'}}>

            <img src={food1} alt="food" id='food1' />
            <img src={food2} alt="food" id='food2' />
            <img src={food3} alt="food" id='food3' />
            <img src={food4} alt="food" id='food4' />
            <img src={food5} alt="food" id='food5' />
            <img src={food6} alt="food" id='food6' />
            <img src={food7} alt="food" id='food7' />

        </section>

        <aside style={{display: 'flex', flexDirection: 'column'}}>

            <section className="nutrient" style={{color: '#745464', display: 'flex', justifyContent: 'space-between', textAlign: 'left'}}>
                <div className='special'></div>
                <p>
                    Fruits and vegetables: These provide important vitamins, minerals, and fiber that are essential for both you and your baby. Aim to include a variety of colorful fruits and vegetables in your diet, such as leafy greens, berries, citrus fruits, carrots, and sweet potatoes.
                </p>
            </section>

            <section className="nutrient" style={{color: '#745464', display: 'flex', justifyContent: 'space-between', width: '90%', textAlign: 'left'}}>
                <div className='special'></div>
                <p>
                    Whole grains: These provide important nutrients like fiber, iron, and B vitamins. Choose whole grain breads and cereals, brown rice, quinoa, and oatmeal.
                </p>
            </section>

            <section className="nutrient" style={{color: '#745464', display: 'flex', justifyContent: 'space-between', width: '90%', textAlign: 'left'}}>
                <div className='special'></div>
                <p>
                    Protein: This is essential for building and repairing tissues, and supporting the growth of your baby. Good sources of protein include lean meat, poultry, fish, eggs, beans, and lentils.
                </p>
            </section>

            <section className="nutrient" style={{color: '#745464', display: 'flex', justifyContent: 'space-between', width: '90%', textAlign: 'left'}}>
                <div className='special'></div>
                <p>
                    Dairy: Dairy products like milk, cheese, and yogurt provide important nutrients like calcium and vitamin D that are essential for bone growth and development.
                </p>
            </section>

            <section className="nutrient" style={{color: '#745464', display: 'flex', justifyContent: 'space-between', width: '90%', textAlign: 'left'}}>
                <div className='special'></div>
                <p>Healthy fats: These are important for brain development and can help prevent preterm labor. 
                    Good sources of healthy fats include nuts, seeds, avocados, and fatty fish like salmon.
                </p>
            </section>

        </aside>

    </div>
  )
}

export default Nutrition