import AdminLayout from '../../components/AdminLayout'
import AdminStats from '@/components/AdminStats'
import AdminTicker from '@/components/AdminTicker'
import AdminQuiz from '@/components/AdminQuiz'

export default function AdminDashboard() {
  return (
    <AdminLayout>
      {/* Header - Responsive */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
          Admin Dashboard – KickExpert
        </h1>
      </div>

      {/* Content with proper spacing */}
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        <AdminStats />
        <AdminTicker />
        <AdminQuiz />
      </div>
    </AdminLayout>
  )
}
