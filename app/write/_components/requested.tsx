import Link from "next/link";

const Requested: React.FC = () => {
  return (
    <div className="c-editor is-center">
      <div className="c-editor__group">
        <p className="is-md">
          La publicacion de tu articulo fue solicitada, en unos dias recibiras
          una notificacion con la respuesta a tu peticion, recuerda que puedes
          cancelar una peticion desde la pestaña de borradores. En caso de tener
          dudas puedes contactarte con el soporte tecnico en la pestaña de
          ayuda.
        </p>
      </div>

      <div className="c-editor__group">
        <Link className="c-editor__delete is-md" href="/drafts">
          Go back to drafts
        </Link>
        <Link className="c-editor__delete" href="/">
          Go back to home
        </Link>
      </div>
    </div>
  );
}

export default Requested