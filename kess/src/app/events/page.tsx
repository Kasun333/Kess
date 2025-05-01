import Image from 'next/image'
import Link from 'next/link'

export default function Events() {
  const upcomingEvents = [
    {
      title: 'Annual Get-Together',
      date: 'April 2024',
      description:
        'Join us for our annual gathering of engineering students and alumni. Network, share experiences, and celebrate our community.',
      image: '/events/get-together.jpg',
      location: 'Kegalle',
    },
    {
      title: 'Seminar Program for A-Level Students',
      date: 'May 2024',
      description:
        'A comprehensive 4-week program covering key topics in physics and mathematics for A-Level students.',
      image: '/events/seminar.jpg',
      location: 'Kegalle',
    },
    {
      title: 'Practical Camp',
      date: 'June 2024',
      description:
        'Hands-on physics practical sessions for students to enhance their understanding and skills.',
      image: '/events/practical.jpg',
      location: 'Kegalle',
    },
  ]

  const pastEvents = [
    {
      title: 'Blood Donation Camp',
      date: 'January 2024',
      description:
        'Successfully organized a blood donation camp in collaboration with the National Blood Bank.',
      image: '/events/blood-donation.jpg',
      location: 'Kegalle',
    },
    {
      title: 'Annual Cricket Encounter',
      date: 'December 2023',
      description:
        'Annual cricket tournament bringing together engineering students from different years.',
      image: '/events/cricket.jpg',
      location: 'Kegalle',
    },
    {
      title: 'Asala Perahera Dansala',
      date: 'August 2023',
      description:
        'Community service initiative during the Asala Perahera festival.',
      image: '/events/dansala.jpg',
      location: 'Kegalle',
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Events & Activities</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us for our upcoming events and explore our past activities
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mark your calendars for these exciting upcoming events
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.location}
                  </div>
                  <Link
                    href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 font-medium hover:text-blue-800"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Past Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at our successful past events and activities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex items-center text-gray-500 mb-4">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {event.location}
                  </div>
                  <Link
                    href={`/events/${event.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 font-medium hover:text-blue-800"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:px-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Want to Stay Updated?
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Subscribe to our newsletter to receive updates about upcoming events
                </p>
                <form className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 