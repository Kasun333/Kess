import Image from 'next/image'

export default function About() {
  const teamMembers = [
    {
      name: 'Channa',
      role: 'President',
      year: '20',
      image: '/team/president.jpg',
    },
    {
      name: 'Nipun',
      role: 'Vice President',
      year: '21',
      image: '/team/vice-president.jpg',
    },
    {
      name: 'Madushanka',
      role: 'Secretary',
      year: '20',
      image: '/team/secretary.jpg',
    },
    {
      name: 'Piyumantha',
      role: 'Assistant Secretary',
      year: '21',
      image: '/team/assistant-secretary.jpg',
    },
    {
      name: 'Nadeesha',
      role: 'Treasurer',
      year: '20',
      image: '/team/treasurer.jpg',
    },
    {
      name: 'Sandaru',
      role: 'Junior Treasurer',
      year: '21',
      image: '/team/junior-treasurer.jpg',
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About KESS</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering engineering students through knowledge sharing, community service,
              and professional development
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To create a vibrant community of engineering students who support each other
                in their academic and professional journeys, while contributing positively
                to society through various initiatives and programs.
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To be the leading student society that nurtures future engineering leaders
                through knowledge sharing, skill development, and community engagement.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/about/mission.jpg"
                alt="KESS Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Founded with the vision of bringing together engineering students from
              Kegalle, KESS has grown into a vibrant community that supports academic
              excellence and professional development while serving the community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-4">2018</div>
              <h3 className="text-xl font-semibold mb-2">Foundation</h3>
              <p className="text-gray-600">
                KESS was established to support engineering students in Kegalle
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-4">2020</div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">
                Expanded programs and initiatives to serve more students
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-4">2024</div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Launching new initiatives and expanding community impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated individuals who lead KESS and work tirelessly to support
              our community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">{member.role}</p>
                  <p className="text-gray-600">Year {member.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 