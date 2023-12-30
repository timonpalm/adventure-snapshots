import NavMenu from "../components/NavMenu";

export default function About() {
    return (
        <div className="h-full overflow-auto bg-stone-900">
            <NavMenu />
            <h1>This is my Story</h1>
                <section>
                    <p>
                        In 2021 I decided to go on a bike trip alone. It was first just planned to get to the south of Portugal and see how it goes.
                        Everything turned out to be very fortunity and I really enjoyed the time on my bike. So, I continued my trip. But where to go next?
                        Portugal is the western end of Europe. Going back, would have meant to go back to colder regions, as it was still winter at that time.
                        I really wanted to got to Morocco but the bourders were closed at that time due to Covid. So I decided to take a ferry to the canary islands and
                        see if in the meantime the borders would open again. And they did.
                    </p>
                </section>
        </div>
        ) 
}