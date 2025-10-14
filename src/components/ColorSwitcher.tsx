import { useAccentColor } from '../hooks/useAccentColor';

const ColorSwitcher = () => {
  const { setAccentByName, availableColors, changeAccentColor } = useAccentColor();

  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-sm font-semibold mb-2">Cambiar color de acento:</h3>
      <div className="flex flex-wrap gap-2">
        {availableColors.map((color) => (
          <button
            key={color.name}
            onClick={() => setAccentByName(color.name)}
            className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-500 transition-colors"
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
      <div className="mt-2">
        <input
          type="color"
          onChange={(e) => changeAccentColor(e.target.value)}
          className="w-full h-8 rounded cursor-pointer"
          title="Color personalizado"
        />
      </div>
    </div>
  );
};

export default ColorSwitcher;