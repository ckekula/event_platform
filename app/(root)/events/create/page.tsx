import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth(); //render the id of the user currently logged in

  const userId = sessionClaims?.userId as string; //extract userId from session

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" /> {/* pass in the userId and type called create */}
      </div>
    </>
  )
}

export default CreateEvent