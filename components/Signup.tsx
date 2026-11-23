export default function Signup({ heading, text }: { heading: string; text: string }) {
  const action = process.env.NEXT_PUBLIC_SIGNUP_ACTION;
  return (
    <section className="signup">
      <div className="wrap narrow center">
        <h2>{heading}</h2>
        <p className="muted">{text}</p>
        {action ? (
          <form action={action} method="post" className="signup-form">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input id="email" type="email" name="email_address" placeholder="Your email" required />
            <button type="submit">Join the list</button>
          </form>
        ) : (
          <p className="soon">The waitlist opens very soon.</p>
        )}
      </div>
    </section>
  );
}
