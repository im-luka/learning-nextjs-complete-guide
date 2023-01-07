import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ onAddMeetup }) => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const addressRef = useRef(null);
  const descriptionRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const meetup = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    onAddMeetup(meetup);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={titleRef} type="text" id="title" required />
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input ref={imageRef} type="url" id="image" required />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input ref={addressRef} type="text" id="address" required />
        </div>

        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            ref={descriptionRef}
            id="description"
            rows="5"
            required
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
