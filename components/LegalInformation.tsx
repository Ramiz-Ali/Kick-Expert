"use client"

import { useState } from "react"
import { FileText, Shield, CreditCard, Share2, Globe, Handshake } from "lucide-react"

export default function LegalInformation() {
  const [activeSection, setActiveSection] = useState("studio-software")

  const legalSections = [
    {
      id: "studio-software",
      title: "URBO Studio Software",
      subtitle: "Terms & Conditions",
      icon: FileText,
    },
    {
      id: "cookies",
      title: "Cookies Policy",
      subtitle: "",
      icon: Shield,
    },
    {
      id: "urbo-pay",
      title: "URBO Pay",
      subtitle: "Terms & Conditions",
      icon: CreditCard,
    },
    {
      id: "distribution",
      title: "Distribution Channels",
      subtitle: "Terms & Conditions",
      icon: Share2,
    },
    {
      id: "website-terms",
      title: "Website Terms",
      subtitle: "of Use",
      icon: Globe,
    },
    {
      id: "service-level",
      title: "Service Level",
      subtitle: "Agreement",
      icon: Handshake,
    },
  ]

  const contentSections = [
    {
      title: 'Section 110.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
      content: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."`,
    },
    {
      title: 'Section 110.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
      content: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."`,
    },
    {
      title: 'Section 110.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
      content: `"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."`,
    },
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Left Sidebar - Legal Navigation Cards */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <h2 className="text-xl sm:text-2xl font-bold text-lime-500 mb-6">Legal Information</h2>

              <div className="space-y-4">
                {legalSections.map((section) => {
                  const IconComponent = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 text-left ${
                        activeSection === section.id ? "ring-2 ring-lime-400 shadow-lg" : ""
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold text-gray-900 leading-tight">{section.title}</p>
                        {section.subtitle && (
                          <p className="text-sm text-gray-600 mt-0.5 leading-tight">{section.subtitle}</p>
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              {/* Introduction Paragraph */}
              <div className="mb-8">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>

              {/* Content Sections */}
              <div className="space-y-8">
                {contentSections.map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-tight">{section.title}</h3>
                    <div className="pl-4 border-l-4 border-lime-400 bg-lime-50 py-3 rounded-r-lg">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">{section.content}</p>
                    </div>

                    {/* Additional Lorem ipsum content */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                ))}
              </div>

              {/* Final Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                  Section 110.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                </h3>
                <div className="pl-4 border-l-4 border-lime-400 bg-lime-50 py-3 rounded-r-lg">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
