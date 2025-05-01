import Link from 'next/link';
import Image from 'next/image';

export default function EventCard({ 
  id, 
  title, 
  date, 
  time, 
  location, 
  image, 
  description, 
  category 
}) {
  // Format date
  const eventDate = new Date(date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  
  // Category color mapping
  const categoryColors = {
    'seminar': 'bg-indigo-100 text-indigo-800',
    'workshop': 'bg-emerald-100 text-emerald-800',
    'social': 'bg-amber-100 text-amber-800',
    'technical': 'bg-blue-100 text-blue-800',
    'community': 'bg-rose-100 text-rose-800',
    'sports': 'bg-purple-100 text-purple-800',
    'default': 'bg-gray-100 text-gray-800',
  };
  
  const categoryColor = categoryColors[category?.toLowerCase()] || categoryColors.default;

  return (
    <div className="card group overflow-hidden">
      <div className="relative overflow-hidden mb-4 rounded-lg h-48">
        <Image
          src={image || "/api/placeholder/800/500"}
          alt={title}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          fill
        />
        <div className="absolute top-0 left-0 m-3">
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${categoryColor}`}>
            {category || 'Event'}
          </span>
        </div>
      </div>
      <div className="flex items-center mb-3 text-sm text-gray-500">
        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{formattedDate}</span>
        
        {time && (
          <>
            <span className="mx-2">•</span>
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{time}</span>
          </>
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      
      {location && (
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
      )}
      
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      
      <Link 
        href={`/events/${id}`} 
        className="inline-block text-primary-700 font-medium hover:text-primary-800 transition-colors"
      >
        Learn More
        <svg className="inline-block ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}