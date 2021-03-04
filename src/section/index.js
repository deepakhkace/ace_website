import React from "react";
import "./style.css";
import useStyles from "./styles";
export default function Section() {
  const classes = useStyles();
  return (
    <div className="wrapper">
      <div className="container">
        <div>
          <h1 className="h1">Build anything</h1>
        </div>
        <div className="space"></div>
        <div>
          <p className="discription">
            Stack our library of features (like login, push notifications or
            shopping cart) together, however you like. Specialists customise
            them – to fit your idea perfectly.
          </p>
        </div>
      </div>

      <div className="spacebig"></div>
      <div className="container">
        <div>
          <h1 className="h1">Select your tech</h1>
        </div>
        <div className="space"></div>
        <div>
          <p className="p">
            Tell us what you want to create. An app? Shopping platform?
            Wearable?
          </p>

          <div className="space1"></div>
          <div>
            <img
              src="https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466fb5a032b23be106fe64_1.png"
              width="597"
              sizes="(max-width: 767px) 93vw, (max-width: 991px) 54vw, (max-width: 1279px) 53vw, (max-width: 1919px) 597px, 46vw"
              alt=""
              loading="lazy"
              srcset="https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466fb5a032b23be106fe64_1-p-500.png 500w, https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466fb5a032b23be106fe64_1-p-800.png 800w, https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466fb5a032b23be106fe64_1-p-1080.png 1080w, https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466fb5a032b23be106fe64_1.png 1096w"
            />
          </div>
        </div>
      </div>
      <div className="spacebig"></div>
      <div className="container">
        <div>
          <h1 className="h1">Pick your features</h1>
        </div>
        <div className="space"></div>
        <div>
          <p className="p">
            Choose from our library of over 500 features. Then we'll customise
            them to your idea.
          </p>
          <div className="space1"></div>
          <div>
            <img
              src="https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466fa90e3e4bedd2688125_2.png"
              width="588"
              sizes="(max-width: 767px) 93vw, (max-width: 991px) 54vw, (max-width: 1279px) 53vw, (max-width: 1919px) 588px, 46vw"
              alt=""
              loading="lazy"
              srcset="https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466fa90e3e4bedd2688125_2-p-500.png 500w, https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466fa90e3e4bedd2688125_2-p-800.png 800w, https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466fa90e3e4bedd2688125_2.png 1080w"
            />
          </div>
        </div>
      </div>
      <div className="spacebig"></div>
      <div className="container">
        <div>
          <h1 className="h1">Choose your timeline</h1>
        </div>
        <div className="space"></div>
        <div>
          <p className="p">
            Want an instant free prototype? MVP? Or the full build? And how fast
            do you need it?
          </p>
          <div className="space1"></div>
          <div>
            <img
              src="https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466f9c6a22fd8a39637209_3.png"
              width="595.5"
              sizes="(max-width: 767px) 93vw, (max-width: 991px) 54vw, (max-width: 1279px) 53vw, (max-width: 1919px) 595.5px, 46vw"
              alt=""
              loading="lazy"
              srcset="https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466f9c6a22fd8a39637209_3-p-500.png 500w, https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466f9c6a22fd8a39637209_3-p-800.png 800w, https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466f9c6a22fd8a39637209_3-p-1080.png 1080w, https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466f9c6a22fd8a39637209_3.png 1098w"
            />
          </div>
        </div>
      </div>
      <div className="spacebig"></div>
      <div className="container">
        <div>
          <h1 className="h1">See your idea come alive</h1>
        </div>
        <div className="space"></div>
        <div>
          <p className="p">
            Review your Build Card. It’s your idea fleshed out – with a
            guaranteed price and timings.
          </p>
          <div className="space1"></div>
          <div>
            <img
              src="https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466f83e75f57202cb14ac6_4.png"
              width="600"
              sizes="(max-width: 767px) 93vw, (max-width: 991px) 54vw, (max-width: 1279px) 53vw, (max-width: 1919px) 600px, 46vw"
              alt=""
              loading="lazy"
              srcset="https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466f83e75f57202cb14ac6_4-p-500.png 500w, https://assets-global.website-files.com/5d779dddc494dd2921fdd1b2/5f466f83e75f57202cb14ac6_4.png 1082w"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
