// 함수와 파라미터

// ex1)

function calculateCircleArea(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area); //3.141592653589793

// ex2)

function calculateCircleArea(r = 1) {
  //기본값으로 1을 사용하겠다.
  return Math.PI * r * r;
}

// ex3)

const calculateCircleArea = (r = 1) => {
  return Math.PI * r * r;
};

const calculateCircleArea = (r = 1) => Math.PI * r * r;
