import React, { useState } from 'react'

interface NewreadmorebuttonProps {
  text: string
  maxLength: number
  QuesAns?: Array<{
    id: number
    icon: React.ReactNode
    statement: string
    paragraph: string
  }>
}

const Newreadmorebutton: React.FC<NewreadmorebuttonProps> = ({ text, maxLength, QuesAns }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  const shouldTruncate = text.length > maxLength
  const displayText = isExpanded || !shouldTruncate ? text : text.substring(0, maxLength) + '...'

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <div dangerouslySetInnerHTML={{ __html: displayText }} />
      </div>

      {/* Read More Button */}
      {shouldTruncate && (
        <div className="text-center mb-8">
          <button
            onClick={toggleExpanded}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      )}

      {/* FAQ Section */}
      {QuesAns && QuesAns.length > 0 && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {QuesAns.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <h3 className="text-xl font-semibold text-gray-800 pr-4">
                        {item.statement}
                      </h3>
                    </div>
                    <div className={`transform transition-transform ${expandedFAQ === item.id ? 'rotate-45' : ''}`}>
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                </button>
                {expandedFAQ === item.id && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">
                        {item.paragraph}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Newreadmorebutton