async function main() {
	const Lock = await ethers.getContractFactory("Lock");
	console.log("Deploying contract...");
	const contract = await Lock.deploy();
	await contract.deployed();
	console.log("Contract deployed to:", contract.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
