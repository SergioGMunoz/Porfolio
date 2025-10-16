import { useAccentColor } from '@/hooks/useAccentColor';

interface AccentColor {
  name: string;
  value: string;
}

const ColorSwitcher = () => {
  const { setAccentByName, availableColors, changeAccentColor } = useAccentColor();

  return (
    <div className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg transition-colors duration-300">
      <h3 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-200">Cambiar color de acento:</h3>
      <div className="flex flex-wrap gap-2">
        {availableColors.map((color: AccentColor) => (
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