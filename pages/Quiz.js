import WhatDiningHallAreYou from "../app/components/WhatDiningHallAreYou";

export default function Quiz(){

    return (
      <div>
        <WhatDiningHallAreYou
            question="Which of the following animals do you most relate to?"
            button1Text="Rat"
            button2Text="Ant"
            button3Text="Poodle"
            button4Text="Horse"
            button5Text="Skunk"
            button6Text="Racoon"
            button7Text="Parrot">
        </WhatDiningHallAreYou>
      </div>
    );
  };
