import {memo, useCallback, ChangeEvent} from 'react';

interface IProps {
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}

export const Select = memo<IProps>(function Select({value, options, onChange}) {
  const change = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  }, [onChange]);

  return (
    <select value={value} onChange={change}>
      {options.map(item => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  );
});
