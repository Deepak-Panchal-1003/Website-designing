export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12">
          Careers at DJT Corp
        </h1>

        
        <section className="bg-white shadow-md rounded-lg p-8 mb-10 ">
          <h2 className="text-3xl font-semibold mb-4">What We Do</h2>

          <p className="text-gray-700 leading-8">
            At DJT Corp, we focus on giving opportunities to candidates who
            know how to apply their skills at the right moment. Through their
            dedication and commitment, we stay ahead of the curve. We have a
            team of bright, dynamic, qualified, and highly skilled individuals
            who are ready to face any kind of competition in the industry.
          </p>
        </section>

       
<div className="grid md:grid-cols-2 gap-8">
  

  <section className="bg-cyan-50 shadow-md rounded-lg p-8">
    <h2 className="text-3xl font-semibold mb-4">
      Our Expectations
    </h2>

    <p className="text-gray-700 leading-8 mb-6">
      To help exceed our customers&apos; expectations by providing
      excellent and innovative services. The commitment we understand
      runs through everything we do at DJT Corp. This spirit is the
      emphasis with which we serve our customers in innovative ways.
    </p>

    <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
      Send Your CV
    </button>
  </section>


  <section className="bg-cyan-50 shadow-md rounded-lg p-8">
    <h2 className="text-3xl font-semibold mb-4">
      Internships
    </h2>

    <p className="text-gray-700 leading-8 mb-6">
      There&apos;s a path for everyone at DJT Corp. Whether that means
      applying classroom knowledge and instructional learning or gaining
      valuable on-site work experience.
    </p>

    <p className="text-gray-700 leading-8 mb-6">
      Internships provide a real opportunity to apply education and
      skills, gain invaluable hands-on experience, and learn from experts,
      preparing candidates for their future careers.
    </p>

    <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
      Send Your CV
    </button>
  </section>

</div>
      </div>
    </main>
  );
}