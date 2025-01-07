import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

import { Loader, IPhone, Lights } from '../components';

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute w-full h-full ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera
        makeDefault
        position={[2, 2, 3.5]}
      />

      <Lights />

      <OrbitControls
        makeDefault // Устанавливает этот контроллер как основной для управления камерой
        ref={controlRef} // Ссылка на контроллер для доступа к его методам и свойствам
        enableZoom={false} // Отключает возможность зумирования сцены
        enablePan={false} // Отключает возможность панорамирования сцены
        rotateSpeed={0.4} // Устанавливает скорость вращения камеры
        target={new THREE.Vector3(0, 0, 0)} // Устанавливает точку, вокруг которой будет вращаться камера
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        className={`${index === 1 ? 'small' : 'large'}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
