import { CometCard } from "@/components/ui/comet-card";

const ProfilePhoto = () => {
  return (
    <div>
      <CometCard>
        <div className="flex justify-center mt-2">
          <img
            src="/FotoSergio.png"
            alt="Foto de Sergio"
            className="w-48 rounded-xl object-cover"
          />
        </div>
      </CometCard>
    </div>
  );
};

export default ProfilePhoto;
