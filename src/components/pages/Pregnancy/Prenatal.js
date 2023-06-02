import React from 'react'

const Prenatal = () => {
  return (
    <div className="tests-content">

        <section id="tests">

            <h4>tests</h4>

            <ul>
                <li>Prenatal genetic screening: Tests that can identify an increased risk of certain genetic disorders in the baby, such as Down syndrome, cystic fibrosis, and spina bifida. 
                    These tests are typically done in the first or second trimester.
                </li>
            </ul>

            <ul style={{border: 'none', backgroundColor: '#fc6f92'}}>
                <li style={{color: 'white'}}>Ultrasound: Uses sound waves to create images of the baby and can help identify potential problems and determine the baby's due date. Typically done at least once during pregnancy.</li>
            </ul>

            <ul>
                <li>Glucose screening: A test to check for gestational diabetes, which is high blood sugar during pregnancy. Typically done between 24-28 weeks of pregnancy.</li>

            </ul>

        </section>

        <section id="nutrients">

            <h4>nutrients</h4>

            <div>

                <ul>
                    <li>Folic acid: Helps prevent birth defects of the baby's brain and spine. 
                        Women should aim for 400-800 micrograms (mcg) of folic acid per day before and during early pregnancy.
                    </li>
                </ul>
    
                <ul>
                    <li>Iron: Helps the body make extra blood to supply oxygen to the baby. Women should aim for 27 mg of iron per day during pregnancy.</li>
                </ul>
    
                <ul>
                    <li>Calcium: Helps build strong bones and teeth for the baby. Women should aim for 1000-1300 mg of calcium per day during pregnancy.</li>
                </ul>
    
                <ul>
                    <li>Vitamin D: Helps the body absorb calcium and supports the baby's bone growth. Women should aim for 600-800 International Units (IU) of vitamin D per day during pregnancy.</li>
                </ul>

            </div>

        </section>

    </div>
  )
}

export default Prenatal