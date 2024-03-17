import WarningBar from "@/app/admin/ui/WarningBar"

export default function adminLayout({
  children
}:
{
  children: React.ReactNode
}
) {
  return (
    <section >
        <WarningBar />
      <div className="py-10">
        {children}
      </div>
    </section>
  )
}
