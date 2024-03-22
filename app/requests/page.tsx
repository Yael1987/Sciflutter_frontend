import '@/styles/layout/requests-table.scss'
import '@/styles/layout/requests-panel.scss'
import '@/styles/components/requests-options.scss'
import '@/styles/pages/requests.scss'
import { HeadingSecondary } from '../_components/headings';
import { Check } from '@phosphor-icons/react/dist/ssr/Check';
import { ClockCountdown } from '@phosphor-icons/react/dist/ssr/ClockCountdown';
import { X } from '@phosphor-icons/react/dist/ssr/X';
import Pagination from '../_components/pagination';
import { getRequests } from '../_actions/requestsActions';
import Message from '../_components/message';
import { formatDate } from '../_utils/dateUtils';

interface Props{
  searchParams: {
    page: string
  }
}

const Page: React.FC<Props> = async ({ searchParams }) => {

  const { page } = searchParams
  
  const { requests, totalPages } = await getRequests(page ?? '1')

  return (
    <div className="l-requests">
      <HeadingSecondary>Requests and tickets</HeadingSecondary>

      <div className="l-requests-panel">
        <div className="c-requests-options">
          <div className="c-requests-options__search-bar">
            <input type="search" placeholder="Search request" />
          </div>

          <div className="c-filter-sort">
            <div className="c-filter-sort__filters">
              <div className="c-filter-sort__item">
                <label htmlFor="status" className="c-filter-sort__item-title">
                  Status
                </label>

                <select
                  name="status"
                  id="status"
                  className="c-filter-sort__item-options"
                >
                  <option value="approved">Approved</option>
                  <option value="pending">Pending</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
              <div className="c-filter-sort__item">
                <label htmlFor="type" className="c-filter-sort__item-title">
                  Type
                </label>

                <select
                  name="type"
                  id="type"
                  className="c-filter-sort__item-options"
                >
                  <option value="publish">Publish</option>
                  <option value="ticket">Ticket</option>
                </select>
              </div>
            </div>

            <div className="c-filter-sort__item">
              <label htmlFor="sort" className="c-filter-sort__item-title">
                Sort
              </label>

              <select
                name="sort"
                id="sort"
                className="c-filter-sort__item-options"
              >
                <option value="date">Date ascending</option>
                <option value="-date">Date descending</option>
                <option value="requester">Requester ascending</option>
                <option value="-requester">Requester descending</option>
              </select>
            </div>
          </div>
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
                <th>{request.status}</th>
                <td>{request.type}</td>
                <td>{`${request.requester.name} ${request.requester.lastName}`}</td>
                <td>{formatDate(request.date)}</td>
                <td>VIEW</td>
              </tr>
            ))}
            {/* <tr className="rejected">
              <th>
                <X size={24} /> Declined
              </th>
              <td>Publish</td>
              <td>Renata Lopez</td>
              <td>20 minutes ago</td>
              <td>VIEW</td>
            </tr>
            <tr className="pending">
              <th>
                <ClockCountdown size={24} /> Pending
              </th>
              <td>Publish</td>
              <td>Renata Lopez</td>
              <td>20 minutes ago</td>
              <td>VIEW</td>
            </tr>
            <tr className="approved">
              <th>
                <Check size={24} /> Approved
              </th>
              <td>Publish</td>
              <td>Renata Lopez</td>
              <td>20 minutes ago</td>
              <td>VIEW</td>
            </tr> */}
          </tbody>
        </table>

        {requests.length === 0 && (
          <Message message="There is no requests yet" />
        )}

        {requests.length > 0 && <Pagination pages={totalPages} />}
      </div>
    </div>
  );
}

export default Page