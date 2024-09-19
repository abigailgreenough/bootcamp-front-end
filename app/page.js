// We import components from other files like this
import MyCard from "./components/MyCard";

// In a `page.js` file, we usually call the page function `Home`
export default function Home() {
  return (
    <div>
      <MyCard
        // Example of passing in props (properties) to the card
        title="Welcome to Your Brown Dining Advisor!"
        button1Text="Enter Dining Data!"
        button2Text="Take a Fun Quiz!">
      </MyCard>

    </div>
  );
}
