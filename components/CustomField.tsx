// components/CustomField.tsx
import { Field, FieldAttributes, useField } from "formik";

const CustomField = <V extends unknown>(props: FieldAttributes<V>) => {
  // useField hook is a useful hook to get access to the field's states when using custom components.
  // The meta object contains error, touched states for the specific field
  const [field, meta] = useField(props.name);
  return (
    <div className="form-control">
      <Field {...props} className="input input-bordered" />
      {/* display the field has error and was already touched */}
      {meta.error && meta.touched && (
        <label className="label">
          <span className="label-text-alt text-error">{meta.error}</span>
        </label>
      )}
    </div>
  );
};
export default CustomField;
