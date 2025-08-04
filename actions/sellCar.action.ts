import { connectdb } from "@/lib/db";
import { SellCar } from "@/model";



export async function getAllSellCarDetails() {

  try {
    await connectdb();
    const sellCarDetail = await SellCar.find({})
      .sort({ createdAt: -1 })
      .populate("user", "phone city");
    return { success: true, sellCarDetail };
  } catch (error) {
    console.error(`Error getting categories:`, error);
    return { success: false, message: `Failed to fetch categories` };
  }
}
