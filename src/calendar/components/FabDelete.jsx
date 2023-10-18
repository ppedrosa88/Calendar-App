import { useCalendarStore,  } from "../../hooks"
import '../../styles.css'


export const FabDelete = () => {

    const { startDeletingEvent, hasEventSelected } = useCalendarStore()

    const handleDelete = () => {
      startDeletingEvent()
    }

  return (
    <button
        className="btn btn-danger fab-danger"
        onClick={ handleDelete }
        style={{
          display: hasEventSelected ? '' : 'none'
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
