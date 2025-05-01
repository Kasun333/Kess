export default function SectionTitle({ title, subtitle, centered = false, light = false }) {
    return (
      <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
        <h2 className={`text-3xl md:text-4xl font-bold font-heading mb-3 ${light ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg ${light ? 'text-gray-300' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
        <div className={`h-1 w-20 rounded-full mt-4 ${centered ? 'mx-auto' : ''} ${light ? 'bg-white' : 'bg-primary-600'}`}></div>
      </div>
    );
  }