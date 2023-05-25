import { cn } from "@/lib/utils"

interface People {
  name: string
  title: string
  email: string
  role: string
}

interface Props {
  className?: string
  people: People[]
}

export default function Table({ className, people }: Props) {
  return (
    <div className={cn("flex-root", className)}>
      <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="bg-opacity/75 sticky top-[--header-height]  z-10 border-b border-accent-300 bg-white py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-accent-900 backdrop-blur sm:pl-6 lg:pl-8"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="bg-opacity/75 sticky top-[--header-height]  z-10 hidden border-b border-accent-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-accent-900 backdrop-blur sm:table-cell"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="bg-opacity/75 sticky top-[--header-height]  z-10 hidden border-b border-accent-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-accent-900 backdrop-blur lg:table-cell"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="bg-opacity/75 sticky top-[--header-height]  z-10 border-b border-accent-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-accent-900 backdrop-blur"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="bg-opacity/75 sticky top-[--header-height]  z-10 border-b border-accent-300 bg-white py-3.5 pl-3 pr-4 backdrop-blur sm:pr-6 lg:pr-8"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, personIdx) => (
                <tr key={person.email}>
                  <td
                    className={cn(
                      personIdx !== people.length - 1
                        ? "border-b border-accent-200"
                        : "",
                      "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-accent-900 sm:pl-6 lg:pl-8"
                    )}
                  >
                    {person.name}
                  </td>
                  <td
                    className={cn(
                      personIdx !== people.length - 1
                        ? "border-b border-accent-200"
                        : "",
                      "hidden whitespace-nowrap px-3 py-4 text-sm text-accent-500 sm:table-cell"
                    )}
                  >
                    {person.title}
                  </td>
                  <td
                    className={cn(
                      personIdx !== people.length - 1
                        ? "border-b border-accent-200"
                        : "",
                      "hidden whitespace-nowrap px-3 py-4 text-sm text-accent-500 lg:table-cell"
                    )}
                  >
                    {person.email}
                  </td>
                  <td
                    className={cn(
                      personIdx !== people.length - 1
                        ? "border-b border-accent-200"
                        : "",
                      "whitespace-nowrap px-3 py-4 text-sm text-accent-500"
                    )}
                  >
                    {person.role}
                  </td>
                  <td
                    className={cn(
                      personIdx !== people.length - 1
                        ? "border-b border-accent-200"
                        : "",
                      "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-8 lg:pr-8"
                    )}
                  >
                    <a
                      href="#"
                      className="text-primary-600 hover:text-primary-900"
                    >
                      Edit<span className="sr-only">, {person.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
