import '@/styles/layout/requests-table.scss'
import '@/styles/layout/requests-panel.scss'
import '@/styles/components/requests-options.scss'
import '@/styles/pages/requests.scss'
import { HeadingSecondary } from '../_components/headings';
import { Check } from '@phosphor-icons/react/dist/ssr/Check';
import { ClockCountdown } from '@phosphor-icons/react/dist/ssr/ClockCountdown';
import { X } from '@phosphor-icons/react/dist/ssr/X';
import Pagination from '../_components/pagination';
import { getRequestById, getRequests } from '../_actions/requestsActions';
import Message from '../_components/message';
import { formatDate } from '../_utils/dateUtils';
import SearchBar from './_components/searchBar';
import FilterSort from './_components/filterSort';

const ICONS: {
  pending: React.ReactNode,
  rejected: React.ReactNode,
  approved: React.ReactNode,
} = {
  pending: <ClockCountdown size={24} />,
  rejected: <X size={24} />,
  approved: <Check size={24} />
};

interface Props{
  searchParams: {
    page: string,
    search: string,
    status: string,
    type: string,
    sort: string
  }
}

const Page: React.FC<Props> = async ({ searchParams }) => {
  const { page, search } = searchParams
  
  let requests
  let totalPages = 0

  if (search) {
    requests = await getRequestById(search)
  } else {
    
    const queryString = `${searchParams.status ? '&status=' + searchParams.status : ''}${searchParams.type ? '&type=' + searchParams.type : ''}${searchParams.sort ? '&sort=' + searchParams.sort : '&sort=-date'}`

    const response = await getRequests(page || "1", queryString);
    requests = response.requests
    totalPages = response.totalPages
  }

  return (
    <div className="l-requests">
      <HeadingSecondary>Requests and tickets</HeadingSecondary>

      <div className="l-requests-panel">
        <div className="c-requests-options">
          <SearchBar />

          <FilterSort />
        </div>

        <table className="l-requests-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Request type</th>
              <th>Requester</th>
              <th>Request date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr className={request.status} key={request._id}>
                <th>
                  {ICONS[request.status]} {request.status}
                </th>
                <td>{request.type}</td>
                <td>{`${request.requester.name} ${request.requester.lastName}`}</td>
                <td>{formatDate(request.date)}</td>
                <td>
                  <a href={`/request/${request._id}`}>VIEW</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {requests.length === 0 && (
          <Message message="There is no requests found" />
        )}

        {totalPages > 1 && <Pagination pages={totalPages} />}
      </div>
    </div>
  );
}

export default Page